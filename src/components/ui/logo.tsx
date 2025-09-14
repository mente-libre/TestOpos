import Image from 'next/image';
import logo from '@/app/logo.png';

export function Logo(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>
            <Image 
              src={logo} 
              alt="TestOpos logo" 
              width={130} 
              height={32}
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
        </div>
    )
}
