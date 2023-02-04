import { createStyles, rem } from '@mantine/core';
import banner from './banner.webp';

export default createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    minHeight: rem(700),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
  },

  supTitle: {
    fontSize: theme.fontSizes.sm,
    textTransform: 'uppercase',
    fontWeight: 700,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    opacity: 0.8,
    marginBottom: theme.spacing.sm,
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,
  },

  highlight: {
    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.cyan[6],
  },

  description: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
    lineHeight: 1.5,
    maxWidth: rem(580),
    marginTop: theme.spacing.md,
  },

  body: {
    flex: `0 0 ${rem(700)}`,
    paddingTop: rem(140),
    position: 'relative',
    zIndex: 1,
  },

  image: {
    minHeight: rem(700),
    width: rem(800),
    flex: 1,
    backgroundImage: `url(${banner.src})`,
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 0,
    display: theme.dir === 'rtl' ? 'none' : undefined,

    [`@media (max-width: ${rem(1230)})`]: {
      display: 'none',
    },
  },

  controls: {
    marginTop: theme.spacing.md,
  },

  control: {
    [`@media (max-width: ${rem(600)})`]: {
      flex: 1,
    },
  },

  controlMain: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.cyan[6],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.cyan[6],
    },
  },

  controlSecondary: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
    },
  },

  features: {
    maxWidth: rem(740),
    paddingBottom: theme.spacing.xl,

    [`@media (max-width: ${rem(755)})`]: {
      marginTop: `calc(${theme.spacing.xl} * 2)`,
    },
  },

  featureIcon: {
    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.cyan[6],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
  },

  featureBody: {
    marginTop: theme.spacing.md,
  },

  featureTitle: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    lineHeight: 1,
    marginBottom: rem(7),
  },

  featureDescription: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
    fontSize: theme.fontSizes.xs,
    lineHeight: 1.5,
  },
}));
