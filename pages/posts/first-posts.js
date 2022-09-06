import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPosts() {
    return (
        <Layout>
            <Head>
                <title>첫번째 글</title>
            </Head>
            <h1>첫번째 글</h1>
            <h2>
                <Link href="/">
                    <a>홈으로 돌아가기</a>
                </Link>
            </h2>
        </Layout>
    );
}