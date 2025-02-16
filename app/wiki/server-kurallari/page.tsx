"use client"



export default function IlyadaPage() {
  return (
    <div className="max-w-screen-lg space-y-8">

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Sunucu Kuralları
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Bu sayfada uymadığınız takdirde ceza alacağınız server kuralları açıklanmıştır.
      </p>
      <div className="space-y-5">
        <h2 id="para-birimi" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Claim Sistemi
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Bir oluşumun claimini çevreleyecek şekilde yapı yapı yapmak yasaktır.
        </p>
      </div>

      <div className="space-y-5">
        <h2 id="dunya-siniri" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Görüntü Kirliliği
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Sunucuda saçma sapan yerlere alakasız bloklar koymak(örneğin koşarken daha hızlı koşmak için altına rastgele blok atmak) yasaktır.</li>
          <li>Ağaçları yarı kırılmış şekilde bırakmak yasaktır.</li>
          <li>Görseli kötü olan kutu halindeki yapılar yasaktır. (lütfen yapılarda biraz özen gösterin &#34;topraktan ev yapan adam var !&#34;)</li>
          <li>Sunucuda suya mantığa sığmayan yapılar yapmak, örneğin karşıdan karşıya geçmek için, hayvan taşımak için taş, toprak, nether bloğuyla köprü yapmak veya suyun üzerinde uçan evler yapmak) kesinlikle yasaktır.</li>
        </ul>
      </div>

      {/* TODO: ayrı sayfaya alınacak */}
      <div className="space-y-5">
        <h2 id="claim-hakkinda" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          PVP
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Savaşta taraf olmayan oyuncuların claim sistemi iptal edilmiş klanların bölgelerine sızarak eşya çalmaları ve yapılara hasar vermeleri benzeri bir çok eylem yasaktır.
        </p>
      </div>
    </div >
  )
}