import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import type { Athlete } from '@/data/athletes';

interface AthleteCardProps {
  athlete: Athlete;
}

export function AthleteCard({ athlete }: AthleteCardProps) {
  const initials = athlete.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const totalMedals = athlete.medals.gold + athlete.medals.silver + athlete.medals.bronze;

  return (
    <Link to={`/athlete/${athlete.id}`}>
      <Card className="group relative overflow-hidden bg-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 cursor-pointer">
        {/* Gradient top border */}
        <div className="absolute top-0 left-0 right-0 h-1 gradient-hero" />
        
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <Avatar className="h-24 w-24 mb-4 ring-4 ring-muted group-hover:ring-primary/20 transition-all duration-300">
              <AvatarImage src={athlete.profileImage} alt={athlete.name} />
              <AvatarFallback className="gradient-hero text-primary-foreground text-xl font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>

            {/* Name */}
            <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {athlete.name}
            </h3>

            {/* Grade */}
            <Badge variant="secondary" className="mb-3">
              Grade {athlete.grade}
            </Badge>

            {/* Team */}
            <p className="text-sm text-muted-foreground mb-4">{athlete.team}</p>

            {/* Medal summary */}
            <div className="flex items-center gap-3 pt-3 border-t border-border w-full justify-center">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                  <span className="text-[10px] font-bold text-background">🥇</span>
                </div>
                <span className="text-sm font-medium text-foreground">{athlete.medals.gold}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-silver flex items-center justify-center">
                  <span className="text-[10px] font-bold text-background">🥈</span>
                </div>
                <span className="text-sm font-medium text-foreground">{athlete.medals.silver}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-bronze flex items-center justify-center">
                  <span className="text-[10px] font-bold text-background">🥉</span>
                </div>
                <span className="text-sm font-medium text-foreground">{athlete.medals.bronze}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
