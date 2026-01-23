import { useState } from 'react';
import { AthleteCard } from '@/components/AthleteCard';
import { GenderFilter } from '@/components/GenderFilter';
import { athletes } from '@/data/athletes';
import { Users } from 'lucide-react';

export default function AthletesPage() {
  const [filter, setFilter] = useState<'all' | 'male' | 'female'>('all');

  const filteredAthletes = athletes.filter((athlete) => {
    if (filter === 'all') return true;
    return athlete.gender === filter;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="gradient-hero">
        <div className="container py-12 md:py-16">
          <div className="flex items-center gap-3 mb-2">
            <Users className="h-8 w-8 text-primary-foreground/80" />
            <span className="text-primary-foreground/80 font-medium">School Athletics</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            Athlete Profiles
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Browse our talented swimmers and their achievements
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        {/* Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredAthletes.length}</span> athletes
          </div>
          <GenderFilter value={filter} onChange={setFilter} />
        </div>

        {/* Athletes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAthletes.map((athlete, index) => (
            <div
              key={athlete.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <AthleteCard athlete={athlete} />
            </div>
          ))}
        </div>

        {filteredAthletes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No athletes found</p>
          </div>
        )}
      </div>
    </div>
  );
}
