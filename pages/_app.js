import '../styles/global.css';

/**
 * 최상위 컴포넌트 (해당 컴포넌트 수정 시 서버 재시작 필요)
 * @param {*} param0 
 * @returns {*}
 */
export default function App({Component, pageProps}) {
    return  <Component {...pageProps} />
}