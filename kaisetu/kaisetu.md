# 講義内で気になったことのメモを残す

## Next.jsはDefaultで全ページをPre-render(事前にHTML生成)

1. SSG
  Document,Helpページ
2. SSG+Pre-fetch　ビルド時
  ブログ、商品一覧など
  SEOに有益なデータは、外部DBにある(ブログの記事など)
  Client side fetching->ユーザーアクセス時に最新データ取得可
3. SSG+Clientside fetching
  Todo,DashBord
4. SSG+Pre-fetch+Client side fetching　ビリドジ
  News site

## Dynamic routes(詳細ページのpre-renderingの流れ)

1. getStaticPaths() 
  ->idの一覧を取得

```JavaScript
export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false
  },
}
```

2. getStaticProps() 
  ->各idを使って個別データを取得
  https://jsonplaceholde.../posts/id

```JavaScript
export async function getStaticProps({ params }){
  const {post:post} = await getPostData(params.id);
  return{
    porps:{
      post,
    }
  }
}
```

3. 取得したデータを使ってpropsでReact Componentに渡してPre-rendering
  Componentに渡してPre-rendering
  (HTML自動生成)

```JavaScript
export default function Post({ post }){
  if (!post) {
    return <div>Loading...</div>
  }
}
```