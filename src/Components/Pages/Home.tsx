import { Heading, ListItem, Stack, UnorderedList } from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <Stack spacing={5}>
        <Heading as="h2">やりたいこと</Heading>
      </Stack>
      <UnorderedList w="80%" pl="10px">
        <ListItem>
          <Heading as="h5">01</Heading>
          <ListItem>セパブル/ファットブル(セパブル=trueの時outer=25point)</ListItem>
          <ListItem>501～1501(switch文？)</ListItem>
          <ListItem>マスターアウト"(if(point=0){"シングルに入ってたらバースト、残り1のときバースト"})"</ListItem>
          <ListItem>80％スタッツ計算</ListItem>
        </ListItem>
        <ListItem>
          <Heading as="h5">クリケット</Heading>
          <ListItem>オーバーキル</ListItem>
          <ListItem>80％スタッツ計算</ListItem>
        </ListItem>
        <ListItem>
          <Heading as="h5">ユーザ登録</Heading>
          <ListItem>レーティング算出</ListItem>
          <ListItem>ブル率、トリプル等計算</ListItem>
        </ListItem>
      </UnorderedList>
    </>
  );
};
