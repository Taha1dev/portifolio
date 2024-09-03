import Heading1 from '../chunks/Heading1'
import { MagicCard } from '../magicui/magic-card'

export default function Services() {
  return (
    <div id="services">
      {/* <Heading1 showValue="Services" /> */}
      <div className={'flex gap-4 '}>
        <MagicCard gradientColor={'#D9D9D955'}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempora provident quidem odio iste ex et
          laudantium accusamus sed cum nulla, id esse eaque odit voluptas, praesentium necessitatibus quia atque!
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={'#D9D9D955'}
        >
          Magic
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={'#D9D9D955'}
        >
          Magic
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={'#D9D9D955'}
        >
          Magic
        </MagicCard>
        {/* <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={'#D9D9D955'}
        >
          Card
        </MagicCard> */}
      </div>
    </div>
  )
}
