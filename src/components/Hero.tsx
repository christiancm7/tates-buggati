import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/cover.png'
import bannerImage from '@/images/bucee-full.png'
import XIcon from '@mui/icons-material/X'
import TelegramIcon from '@mui/icons-material/Telegram'
import RedditIcon from '@mui/icons-material/Reddit'
import InstagramIcon from '@mui/icons-material/Instagram'
import { IconButton, Tooltip } from '@mui/material'
import AdfScannerIcon from '@mui/icons-material/AdfScanner'
function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="hidden overflow-hidden md:block">
        <Image
          src={bannerImage}
          alt=""
          priority
          width={350}
          className="max-w-xs -skew-y-6 scale-x-[-1] transform"
        />
      </div>
    </figure>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div
            className="relative z-10 mx-auto flex w-64 rounded-xl  shadow-xl md:w-80 lg:w-auto"
            style={{
              borderRadius: '50%',
              backgroundColor: 'white',
            }}
          >
            <Image src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
          <Testimonial />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              Buccee | $BUCC
            </h1>
            <h4 className="font-display text-5xl font-extrabold text-slate-900 sm:text-3xl">
              On Base Network
            </h4>
            <p className="mt-4 text-3xl text-slate-600">
              Your favorite gas station beaver, helping you make a $BUCC.
            </p>
            <div className="mt-8 flex gap-4">
              <Button
                href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x14c0DBB9d29Cc1d4629CF6D74D7bCdfa3083cd7d&chain=base"
                color="blue"
                style={{
                  backgroundColor: '#d00000',
                }}
              >
                Buy BUCC
              </Button>
              <Tooltip title="X">
                <IconButton href="https://twitter.com/bucceecoin">
                  <XIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Telegram">
                <IconButton href="https://t.me/bucceebase">
                  <TelegramIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Instagram">
                <IconButton href="https://www.instagram.com/bucceecoin/">
                  <InstagramIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Reddit">
                <IconButton href="https://www.reddit.com/r/BucceeBase/s/g2Y3SBd3eN">
                  <RedditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="BaseScan">
                <IconButton href="https://basescan.org/token/0x14c0DBB9d29Cc1d4629CF6D74D7bCdfa3083cd7d">
                  <AdfScannerIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
