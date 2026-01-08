import logoImg from '../../assets/logo.png'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <ImageWithFallback
        src={logoImg}
        alt="Auria HR"
        width={48}
        height={48}
        className="w-12 h-12 rounded-md object-cover"
        decoding="async"
        loading="eager"
      />
      <span className="font-semibold text-[#241773]">Auria HR</span>
    </div>
  )
}
