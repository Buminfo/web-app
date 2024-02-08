"use client";
import { Menu, rem } from "@mantine/core";
// import { LiaShareSolid } from "react-icons/lia";
import { IconShare } from "@tabler/icons-react";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";
import classes from "@/styles/Share.module.css";
// import { Popover, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

function Share({ category, post, theme }) {
  const [pageLink, setPageLink] = useState("");

  useEffect(() => {
    const baseUrl = window.location.origin;

    const url = `${baseUrl}/${category.name}/${post.slug}`;

    setPageLink(url);
  }, []);

  // console.log("loo =" + pageLink);

  return (
    <Menu
      className={classes.menu}
      transitionProps={{ transition: "pop-top-right" }}
      position="top-end"
      // width={220}
      withinPortal
    >
      <Menu.Target>
        <IconShare
          style={{ width: rem(20), height: rem(20) }}
          color={theme.colors.blue[6]}
          stroke={1.5}
        />
      </Menu.Target>
      <Menu.Dropdown className={classes.dropdown}>
        <FacebookShareButton
          blankTarget={true}
          url={pageLink}
          quote={post.title}
          hashtag={["#buminfo", "#buminfoNews"]}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TelegramShareButton
          blankTarget={true}
          url={pageLink}
          quote={post.title}
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <TwitterShareButton
          blankTarget={true}
          url={pageLink}
          quote={post.title}
          hashtag={["#buminfo", "#buminfoNews"]}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton
          blankTarget={true}
          url={pageLink}
          quote={post.title}
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <LinkedinShareButton blankTarget={true} url={pageLink}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </Menu.Dropdown>
    </Menu>
  );
}

export default Share;
