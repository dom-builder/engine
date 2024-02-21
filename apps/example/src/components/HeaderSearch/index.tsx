import { Autocomplete, Group, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import classes from './HeaderSearch.module.css';
import Link from 'next/link';

interface HeaderSearchProps {
  links: { link: string; label: string }[];
}

export default function HeaderSearch({ links }: HeaderSearchProps) {
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
            Alekito
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['Ze da manga', 'Mango joe']}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
}