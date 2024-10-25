import { getImage, getImageRemote } from '@/helper/getImageRemote';

import Image from 'next/image';

import IconNext from 'assets/images/test.jpg';
import IconPhoto from 'assets/images/photo.jpg';

export default async function Home() {
  const { base64 } = await getImage('assets/images/test.jpg');
  // const { base64 } = await getImageRemote(
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg5N686jvlIDt6ZXHyk1yvDPAYQ48Kjrxsw&s'
  // );
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg5N686jvlIDt6ZXHyk1yvDPAYQ48Kjrxsw&s"
          width={281}
          height={180}
          alt="Описание изображения"
          placeholder="blur"
          // blurDataURL={base64}
        /> */}
        <Image
          src={IconNext}
          alt="logo"
          placeholder="blur"
          blurDataURL={base64}
        />
        <Image
          src={IconPhoto}
          width={200}
          height={200}
          alt="photo"
          placeholder="blur"
        />
      </main>
    </div>
  );
}
