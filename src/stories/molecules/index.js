import React from "react";
import { storiesOf } from "@storybook/react";
import { Avatar, BenefitItem } from "components/atoms";
import { VendorLogos, ImageGroup, Benefits } from "components/molecules";

storiesOf("Molecules", module)
  .add("VendorLogos", () => <VendorLogos />)
  .add("ImageGroup", () => (
    <ImageGroup count={3} size={64}>
      <Avatar avatar="avatar2" />
      <Avatar avatar="avatar4" />
      <Avatar avatar="avatar3" />
    </ImageGroup>
  ))
  .add("Benefits", () => (
    <Benefits count={3} size={64}>
      <BenefitItem icon="✈️">This is quite a good thing!</BenefitItem>
      <BenefitItem icon="❤️">And this is equally good.</BenefitItem>
      <BenefitItem icon="🌟">
        This is an even more compelling benefit if you&quo;re using our
        services!
      </BenefitItem>
    </Benefits>
  ));
