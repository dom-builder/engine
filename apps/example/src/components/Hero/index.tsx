import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import classes from './Hero.module.css';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  cta: string;
}

export default function Hero({ title, subtitle, cta }: HeroProps) {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>{title}</Title>
        <Text className={classes.description} size="xl" mt="xl">
         {subtitle}
        </Text>

         <Link href='/about'>
          <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
            {cta}
          </Button>
        </Link>
      </Container>
    </div>
  );
}