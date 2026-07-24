import {Image, SimpleGrid} from '@mantine/core';
import {Lightbox} from '@mantine-bites/lightbox';
import {useState} from 'react';
import {images} from "../data/gallery.ts";

export default function Gallery() {
  const [opened, setOpened] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const open = (index: number) => {
    setInitialSlide(index);
    setOpened(true);
  };

  return (
    <>
      <SimpleGrid minColWidth="300px">
        {images.map((img, index) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            radius="md"
            fit="contain"
            onClick={() => open(index)}
          />
        ))}
      </SimpleGrid>

      <Lightbox
        images={images}
        opened={opened}
        onClose={() => setOpened(false)}
        initialSlide={initialSlide}
      />
    </>
  );
}