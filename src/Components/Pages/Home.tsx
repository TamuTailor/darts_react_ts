import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useClear } from "../../hooks/useClear";
import { Select } from "../molecules/Select";
import { Header } from "../organisms/Header";

export const Home = () => {
  const { clearValue } = useClear();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      clearValue();
    }
  }, [location]);

  return (
    <>
      <Header >
         <Select />
      </Header>
      <UnorderedList   color="white" fontSize="x-large" mt="100px" textAlign="left" paddingLeft="50px" ml="0">
        <ListItem>マスターアウトなど、アウトルールの設定機能を追加予定</ListItem>
        <ListItem>ログイン、スタッツの保存機能追加予定</ListItem>
        <ListItem>デザイン変更予定</ListItem>
      </UnorderedList>
    </>
  );
};
