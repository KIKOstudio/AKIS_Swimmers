import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Result {
  event: string;
  time: string;
  place: string;
  meet: string;
  date: string;
  isPB?: boolean;
}

interface ResultsTableProps {
  results: Result[];
}

export function ResultsTable({ results }: ResultsTableProps) {
  const getPlaceColor = (place: string) => {
    if (place.includes('1st')) return 'text-gold font-semibold';
    if (place.includes('2nd')) return 'text-primary font-semibold';
    if (place.includes('3rd')) return 'text-bronze font-semibold';
    return 'text-muted-foreground';
  };

  return (
    <div className="rounded-lg border border-border overflow-hidden bg-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Event</TableHead>
            <TableHead className="font-semibold">Time</TableHead>
            <TableHead className="font-semibold">Place</TableHead>
            <TableHead className="font-semibold">Meet</TableHead>
            <TableHead className="font-semibold">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result, index) => (
            <TableRow key={index} className="hover:bg-muted/30 transition-colors">
              <TableCell className="font-medium">{result.event}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-semibold">{result.time}</span>
                  {result.isPB && (
                    <Badge className="bg-accent text-accent-foreground text-[10px] px-1.5 py-0">
                      PB
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell className={getPlaceColor(result.place)}>{result.place}</TableCell>
              <TableCell className="text-muted-foreground">{result.meet}</TableCell>
              <TableCell className="text-muted-foreground">{result.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
