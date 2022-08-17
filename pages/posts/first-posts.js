import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function FirstPosts() {
    return (
        <>
            <Head>
                <title>첫번째 글</title>
            </Head>
            <h1>첫번째 글</h1>
            <h2>
                <Link href="/">
                    <a>홈으로 돌아가기</a>
                </Link>
            </h2>
        </>
    );
}