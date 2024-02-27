"use client";
import { useEffect, useState } from "react";
import {
  Container,
  Anchor,
  Group,
  Burger,
  Box,
  Image,
  Button,
  Drawer,
  ScrollArea,
  Divider,
  Center,
  Collapse,
  rem,
  useMantineTheme,
  Select,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "@/styles/Header.module.css";
import { InputSearch } from "./inputs/InputSearch";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconChevronDown,
} from "@tabler/icons-react";
// import { getData } from "../../utils/getData";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  // const [allBlogs, setallBlogs] = useState<any>();
  const [value, setValue] = useState<any>();
  const [categories, setCategories] = useState<any>();

  const router = useRouter();

  useEffect(() => {
    // async function fetchData() {
    //   const blogs = await getData();
    //   setallBlogs(blogs);
    // }

    async function GetAllCategories() {
      async function fetchCategories() {
        try {
          const res = await fetch(
            `https://buminfo-api-4ul5i.ondigitalocean.app/blog_category`

            // }
          );
          // The return value is *not* serialized
          // You can return Date, Map, Set, etc.

          if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error("Failed to fetch data");
          }
          return res.json();
        } catch (error) {}
      }
      const data = await fetchCategories();
      const cate = data?.data;
      const mappedOptions = cate?.map((item: any) => ({
        label: item.name,
        value: item.id.toString(),
      }));
      setCategories(mappedOptions);
    }

    GetAllCategories();
    // fetchData();
  }, []);

  const pathname = usePathname;
  // const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState<any>("Home");
  const [unHome, setUnHome] = useState<any>("/");
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const mainLink = [
    { name: "Nigeria", id: 89 },

    { name: "News", id: 6 },
    // { name: "Latest", id: 5 },
    { name: "Sport", id: 5 },
    { name: "Politics", id: 12 },
    { name: "Entertainment", id: 21 },
    { name: "Business", id: 23 },
    { name: "Technology", id: 47 },
    { name: "Health", id: 13 },
  ];
  // const categoryLinks = categories?.map(
  //   (category: any, index: any) =>

  //     `label: ${category.name}, value:${category.id}`

  // );
  const mainItems = mainLink.map((category: any, index: any) => (
    <Link
      href={`/categories/${encodeURIComponent(category.name)}?c=${category.id}`}
      key={category.name}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        // router().
        // event.preventDefault();
        setUnHome(undefined);
        setActive(index);
      }}
    >
      {category.name}
      {/* {items?.length} */}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size={"lg"}>
        <div className={classes.inner}>
          {/* <MantineLogo size={34} /> */}
          <Link href={"/"}>
            <Image height={40} src={"./next.svg"} alt="dfghj" />
          </Link>
          <InputSearch />

          <Box className={classes.links} visibleFrom="sm">
            <Group justify="flex-end">
              {/* {secondaryItems} */}
              <IconBrandYoutube />
              <IconBrandFacebook />
              <IconBrandTwitter />
            </Group>
          </Box>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.burger}
            size="sm"
            hiddenFrom="sm"
          />
        </div>
        <Group gap={0} justify="flex-end" className={classes.mainLinks}>
          <Link
            href={"/"}
            // key={category.name}
            className={classes.mainLink}
            data-active={pathname.toString() == "/" || unHome}
            onClick={(event) => {
              // event.preventDefault();
              setUnHome("/");
              setActive("Home");
            }}
          >
            Home
          </Link>
          {mainItems}
          <Select
            // label="Other Categories"
            value={value ? value.value : null}
            onChange={(_value, option) => {
              router.push(
                `/categories/${encodeURIComponent(option.label)}?c=${
                  option.value
                }`
              );

              setValue(option);
            }}
            variant="filled"
            radius="lg"
            placeholder="Search other categories"
            data={categories}
            comboboxProps={{ shadow: "md" }}
            searchable
            nothingFoundMessage="Category Not found..."
          />
        </Group>
      </Container>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <Button className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </Button>
          {/* <Collapse in={linksOpened}>{links}</Collapse> */}
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </header>
  );
}
