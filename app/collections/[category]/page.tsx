import CollectionsHeader from "@/components/collections-page/header/CollectionsHeader"
import { AdvertBanners } from "@/components/collections-page/advert/AdvertBanners"
import Container from "./Container"
import Head from "next/head"
import type { Goals } from "@/utils/types"
export const revalidate = 3600
export const fetchCache = 'force-cache'
export default function Layout(props: {
    params: { category: string, goal: string },
    searchParams: { goal: Goals[] | Goals, price: number | string }
}) {

    return <>
        <Head>
            <title>Collections</title>
            <meta name='Collections' content='Collections Page' />

        </Head>
        <CollectionsHeader category={props.params.category} />
        <AdvertBanners />
        <section style={{
            width: '90%',
            display: 'flex',
            margin: '3rem auto',
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'center',

        }}>
            <Container category={props.params.category} filteres={props.searchParams} />
        </section>
    </>
}