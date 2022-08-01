import Link from 'next/link';
import Image from 'next/image';

export default function FirstPosts() {
    return (
        <>
            <Image src="/images/profile.jpg" width={200} height={200}></Image>
            <Link href="/">
                <a>홈으로 돌아가기</a>
            </Link>
        </>
    );
}