import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Calendar, Users, Image, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MedalDisplay } from '@/components/MedalDisplay';
import { ResultsTable } from '@/components/ResultsTable';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { athletes } from '@/data/athletes';

export default function AthleteProfile() {
  const { id } = useParams<{ id: string }>();
  const athlete = athletes.find((a) => a.id === id);

  if (!athlete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Athlete not found</h1>
          <Link to="/">
            <Button>Back to Athletes</Button>
          </Link>
        </div>
      </div>
    );
  }

  const initials = athlete.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        <div className="container py-8 relative">
          {/* Back Button */}
          <Link to="/">
            <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Athletes
            </Button>
          </Link>

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="h-28 w-28 ring-4 ring-primary-foreground/30">
              <AvatarImage src={athlete.profileImage} alt={athlete.name} />
              <AvatarFallback className="bg-primary-foreground/20 text-primary-foreground text-3xl font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                {athlete.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                  Grade {athlete.grade}
                </Badge>
                <span className="text-primary-foreground/80">{athlete.team}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Medals Card */}
            <Card className="shadow-card animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Official Meet Medals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MedalDisplay
                  gold={athlete.medals.gold}
                  silver={athlete.medals.silver}
                  bronze={athlete.medals.bronze}
                />
              </CardContent>
            </Card>

            {/* Results Card */}
            <Card className="shadow-card animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Some Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResultsTable results={athlete.results} />
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Specialty Card */}
            <Card className="shadow-card animate-fade-in" style={{ animationDelay: '150ms' }}>
              <CardHeader>
                <CardTitle className="text-lg">Specialty</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {athlete.specialty.map((spec) => (
                    <Badge key={spec} className="bg-primary/10 text-primary border-primary/20">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Team Info */}
            <Card className="shadow-card animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-primary" />
                  Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium">{athlete.team}</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Season 2024-2025
                </p>
              </CardContent>
            </Card>

            {/* Media Section */}
            <Card className="shadow-card animate-fade-in" style={{ animationDelay: '250ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Image className="h-5 w-5 text-primary" />
                  Media
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Photo Gallery */}
                {athlete.mediaPhotos && athlete.mediaPhotos.length > 0 ? (
                  <div className="px-8">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {athlete.mediaPhotos.map((photo, index) => (
                          <CarouselItem key={index}>
                            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                              <img
                                src={photo}
                                alt={`${athlete.name} photo ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                ) : (
                  <div className="aspect-[4/3] rounded-lg bg-muted flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <Image className="w-8 h-8 text-primary/50" />
                      </div>
                      <p className="text-muted-foreground text-sm">
                        No photos uploaded yet
                      </p>
                    </div>
                  </div>
                )}

                {/* SwimCloud Link */}
                <div className="pt-2 border-t">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Evidence</p>
                  {athlete.swimCloudUrl ? (
                    <a
                      href={athlete.swimCloudUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View on SwimCloud
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">No SwimCloud link added</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
