'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import type { Skill } from '@/lib/data';

type SkillsChartProps = {
  skills: Skill[];
};

const chartConfig = {
  level: {
    label: 'Proficiency',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export function SkillsChart({ skills }: SkillsChartProps) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full h-96">
      <BarChart accessibilityLayer data={skills} layout="vertical" margin={{ left: 20 }}>
        <CartesianGrid horizontal={false} />
        <YAxis
          dataKey="name"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value}
          className="text-sm"
        />
        <XAxis dataKey="level" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Bar dataKey="level" layout="vertical" fill="var(--color-level)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
