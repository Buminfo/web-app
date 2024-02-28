"use client";
import { useEffect, useState } from "react";
import {
  Container,
  Group,
  Burger,
  Box,
  Image,
  Drawer,
  ScrollArea,
  Divider,
  rem,
  useMantineTheme,
  Select,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "@/styles/Header.module.css";
import { InputSearch } from "./inputs/InputSearch";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const [value, setValue] = useState<any>();
  const [categories, setCategories] = useState<any>();

  const router = useRouter();

  useEffect(() => {
    async function GetAllCategories() {
      async function fetchCategories() {
        try {
          const res = await fetch(
            `https://buminfo-api-4ul5i.ondigitalocean.app/blog_category`
          );

          if (!res.ok) {
            console.log("Failed to fetch data");
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
  }, []);

  const pathname = usePathname;
  const [active, setActive] = useState<any>("Home");
  const [unHome, setUnHome] = useState<any>("/");
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  // const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const mainLink = [
    { name: "Nigeria", id: 89 },

    { name: "News", id: 6 },
    { name: "Sport", id: 5 },
    { name: "Politics", id: 12 },
    { name: "Entertainment", id: 21 },
    { name: "Business", id: 23 },
    { name: "Technology", id: 47 },
    { name: "Health", id: 13 },
  ];

  const mainItems = mainLink.map((category: any, index: any) => (
    <Link
      href={`/categories/${encodeURIComponent(category.name)}?c=${category.id}`}
      key={category.name}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        closeDrawer();
        setUnHome(undefined);
        setActive(index);
      }}
    >
      {category.name}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size={"lg"}>
        <div className={classes.inner}>
          {/* <MantineLogo size={34} /> */}
          <Link href={"/"}>
            <Image mah={50} w={"auto"} src={"/logo.png"} alt="dfghj" />
          </Link>
          <InputSearch />

          <Box className={classes.links} visibleFrom="sm">
            <Group justify="flex-end">
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
        <Group
          visibleFrom="sm"
          gap={0}
          justify="flex-end"
          className={classes.mainLinks}
        >
          <Link
            href={"/"}
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
            value={value ? value.value : null}
            onChange={(_value, option) => {
              setActive(option.label);
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
        size="70%"
        padding="md"
        title="Buminfo"
        hiddenFrom="sm"
        zIndex={100}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <Group
            gap={0}
            justify="flex-end"
            display={"grid"}
            className={classes.mainLinks}
          >
            <Link
              href={"/"}
              className={classes.mainLink}
              data-active={pathname.toString() == "/" || unHome}
              onClick={(event) => {
                closeDrawer();
                setUnHome("/");
                setActive("Home");
              }}
            >
              Home
            </Link>
            {mainItems}
            <Select
              value={value ? value.value : null}
              onChange={(_value, option) => {
                setActive(option.label);
                closeDrawer();
                router.push(
                  `/categories/${encodeURIComponent(option.label)}?c=${
                    option.value
                  }`
                );

                setValue(option);
              }}
              style={{ zIndex: 999 }}
              variant="filled"
              radius="lg"
              placeholder="Search other categories"
              data={categories}
              comboboxProps={{ shadow: "md" }}
              searchable
              nothingFoundMessage="Category Not found..."
            />
          </Group>
        </ScrollArea>
      </Drawer>
    </header>
  );
}
