/**
 * Design system usage examples — reference only.
 * Not mounted as a route; import pieces as needed while building pages.
 */

"use client";

import { Inbox, Sparkles } from "lucide-react";

import { SectionWrapper } from "@/components/layout";
import {
  Chip,
  EmptyState,
  Icon,
  SectionTitle,
  StatCard,
  Tag,
} from "@/components/shared";
import { Text } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

export function DesignSystemExamples() {
  return (
    <SectionWrapper spacing="lg" containerClassName="space-y-16">
      <SectionTitle
        eyebrow="Design System"
        title="Primordial UI primitives"
        description="Canonical examples of tokens, typography, and components."
      />

      <section className="space-y-4" aria-labelledby="type-examples">
        <Text as="h3" id="type-examples" variant="heading-md">
          Typography
        </Text>
        <Text variant="display-md">Display Medium</Text>
        <Text variant="heading-lg">Heading Large</Text>
        <Text variant="body-lg" muted>
          Body large — secondary tone for supporting copy.
        </Text>
        <Text variant="caption">Caption / metadata</Text>
      </section>

      <section className="space-y-4" aria-labelledby="button-examples">
        <Text as="h3" id="button-examples" variant="heading-md">
          Buttons
        </Text>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button isLoading>Saving</Button>
          <Button size="icon" aria-label="Featured">
            <Icon icon={Sparkles} size="md" />
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3" aria-label="Cards">
        <Card variant="glass" interactive>
          <CardHeader>
            <CardTitle>Glass card</CardTitle>
            <CardDescription>Subtle glass morphism surface.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="blue">AI</Badge>
              <Chip variant="purple">Creative Tech</Chip>
              <Tag variant="muted">2026</Tag>
            </div>
          </CardContent>
        </Card>
        <StatCard
          label="Projects shipped"
          value="48"
          trend="up"
          delta="+12%"
          description="Year to date"
        />
        <Card>
          <CardHeader>
            <CardTitle>Form control</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input placeholder="Your email" type="email" aria-label="Email" />
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
      </section>

      <EmptyState
        icon={Inbox}
        title="Nothing here yet"
        description="Empty states should feel calm and intentional."
        action={<Button variant="secondary">Create something</Button>}
      />
    </SectionWrapper>
  );
}
