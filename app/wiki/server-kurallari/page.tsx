"use client"



export default function IlyadaPage() {
  return (
    <div className="max-w-screen-lg space-y-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Server Kuralları
      </h1>

      <div className="space-y-5">
        <h2 id="para-birimi" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Claim Sistemi
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Tüm satın alımlar oyun içi bir currency <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">İlyada Coin (IC)</code> üzerinden yürütülmektedir. Gerçek para harcamanız gerekmez.</li>
          <li>Paranızı görmek için <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">/balance</code> komudunu kullanabilirsiniz.</li>
        </ul>
      </div>
      <div className="space-y-5">
        <h2 id="para-birimi" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Para Birimimiz
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li></li>
        </ul>
      </div>

      {/* # Cezalandıracağınız Durumlar
      ## Claim Sistemi
      - Bir oluşumun claimini çevreleyecek şekilde yapı yapı yapmak yasaktır.
      ## Görüntü Kirliliği
      - Sunucuda saçma sapan yerlere alakasız bloklar koymak (örneğin koşarken daha hızlı koşmak için altına rastgele blok atmak) yasaktır.
      - Ağaçları yarı kırılmış şekilde bırakmak yasaktır.
      - Görseli kötü olan kutu halindeki yapılar yasaktır. (lütfen yapılarda biraz özen gösterin "topraktan ev yapan adam var !")
      - Sunucuda suya mantığa sığmayan yapılar yapmak, örneğin karşıdan karşıya geçmek için, hayvan taşımak için taş, toprak, nether bloğuyla köprü yapmak veya suyun üzerinde uçan evler yapmak) kesinlikle yasaktır.
      ## PVP
      - Savaşta taraf olmayan oyuncuların claim sistemi iptal edilmiş klanların bölgelerine sızarak eşya çalmaları ve yapılara hasar vermeleri benzeri bir çok eylem yasaktır.

      Sunucuya katılan herkes bu kuralları kabul etmiş olup, herhangi birini ihlal ettiği taktirde sunucudan uzaklaştırılacak veya yasaklanacaktır. */}

    </div>
  )
}