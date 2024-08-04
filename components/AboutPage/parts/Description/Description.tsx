import Image from "next/image";
import ProfileImage from "@/public/images/profile-img.jpg";
import { getAge } from "@/utils";

import * as S from "./Description.style";
import { Headline, Text } from "@/ui/components";

export function Description() {
  return (
    <S.Description>
      <Headline>About me</Headline>
      <S.FlexContainer>
        <S.ImageContainer>
          <S.ProfileImage
            src={ProfileImage}
            objectFit="cover"
            placeholder="blur"
            alt="my profile picture"
          />
        </S.ImageContainer>
        <S.TextContainer>
          <Headline>About me</Headline>
          <Text>
            Hi, I'm Pavel Zapletal a self-taught JavaScript programmer. I'm{" "}
            {getAge("1994/07/10")} yo, living in Brno. Creating websites is my
            bread and butter. When I'm not at home I usually go outside to enjoy
            some nature.
          </Text>
          <Text>
            I'm mostly interested in front-end frameworks like Next.js and
            Svelte, but I also have some knowledge in Nest.js and Express.
          </Text>
          <Text>
            Besides my passion for front-end development I also like to read
            about mobile applications and in near future I would like to touch
            technologies like React Native and SwiftUI.
          </Text>
        </S.TextContainer>
      </S.FlexContainer>
    </S.Description>
  );
}
