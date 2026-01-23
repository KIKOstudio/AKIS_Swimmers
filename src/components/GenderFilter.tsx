import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface GenderFilterProps {
  value: 'all' | 'male' | 'female';
  onChange: (value: 'all' | 'male' | 'female') => void;
}

export function GenderFilter({ value, onChange }: GenderFilterProps) {
  return (
    <Tabs value={value} onValueChange={(v) => onChange(v as 'all' | 'male' | 'female')}>
      <TabsList className="bg-muted">
        <TabsTrigger 
          value="all" 
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
        >
          All Athletes
        </TabsTrigger>
        <TabsTrigger 
          value="female" 
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
        >
          Girls
        </TabsTrigger>
        <TabsTrigger 
          value="male" 
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
        >
          Boys
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
