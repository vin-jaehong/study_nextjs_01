import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function FirstPosts() {
    return (
        <>
            <Head>
                <title>첫번째 글</title>
            </Head>
            <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
            <h1>첫번째 글</h1>
            <h2>
                <Link href="/">
                    <a>홈으로 돌아가기</a>
                </Link>
            </h2>
        </>
    );
}