"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import CardWiki from "@/components/card-wiki";
import { ExternalLink } from "lucide-react";


export default function IlyadaPage() {
  const router = useRouter()
  return (
    // <div>Hello</div>
    <div className="max-w-screen-lg space-y-8">

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Sunucu Genel Bilgileri
      </h1>

      <div className="space-y-5">
        <h2 id="para-birimi" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Para Birimimiz
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Tüm satın alımlar oyun içi bir currency <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">İlyada Coin (IC)</code> üzerinden yürütülmektedir. Gerçek para harcamanız gerekmez.</li>
          <li>Paranızı görmek için <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">/balance</code> komudunu kullanabilirsiniz.</li>
        </ul>
      </div>

      <div className="space-y-5">
        <h2 id="dunya-siniri" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Dünya Sınırı (World Border)
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Dünya sınırları düzenli olarak genişler.</li>
          {/* TODO: marker'ı görünmez oldu, buraya bak. */}
          <li className="inline-flex items-center">Bunun bilgisini oyun chatinden veya <Button variant="link" onClick={() => router.push("/wiki/selam")} className="h-fit pt-0 pb-0"><ExternalLink />Discord&#39;taki ilgili kanaldan</Button> kanalından takip edebilirsiniz.</li>
        </ul>
      </div>

      {/* TODO: ayrı sayfaya alınacak */}
      <div className="space-y-5">
        <h2 id="claim-hakkinda" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Claim Sistemi
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Bir yapı yapmadan önce, siz yokken alanınızın yağmalanmaması için claim almanız gerekmektedir.</li>
          <li>Bir altın kürek oluşturarak claim alabilirsiniz.</li>
          <li>Gelişiminize göre claim bloklarınız artar ve daha büyük bir alanı claiminize dahil edebilirsiniz.</li>
          <li>Sunucumuzda oynamaya başladığınızda <strong>12x12&#39;lik bir claim alanında</strong> kurulabilirsiniz.
            {/* TODO:  PersesCiklet ile konuşup hem Discord hem site güncellenmeli.*/}
            Oyunda geliştikçe <strong>her 1 saatte 10 claim bloğu</strong> kazanırsınız.</li>
          <li>Claim alanınızın içerisinde kimseye zarar verilemez.</li>
          <li>Claim alanınız içerisinde sizin yetkilendirmediğiniz hiç kimse alana blok koyamaz, yağmalayamaz.</li>
          <li>Claim alanınızın dışında yapılar, sandık koruması olmadığından sandıklar ve yapılar yağmalanabilir.</li>
          <li>Alanınızın dışına çıkmamak sizin sorumluluğunuzdadır.</li>
          <li>Alanınızdan başka oluşumların claim alanına giremezsiniz ve claimleriniz birbirlerine çok yakın kurulmamalıdır.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 id="claim-alma" className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Claim Alma - Arazi Sahiplenme
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li></li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 id="claim-komutlari" className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Claim Komutları
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Korumalı bölgenize arkadaş eklemek için <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">/trust [arkadaşının adı]</code> komudunu kullanabilirsiniz.</li>
          <li>Korumalı bölgenizden arkadaş çıkartmak için <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">/untrust [arkadaşının adı]</code> komudunu kullanabilirsiniz.</li>
          <li>İçinde bulunduğunuz korumalı alanı silmek için <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">/abandonclaim</code> komutunu kullanabilirsiniz.</li>
          <li>Tüm korumalı alanlarınızı silmek için <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">/abandonallclaims</code> komutunu kullanabilirsiniz.</li>
        </ul>
      </div>

      <div className="space-y-5">
        <h2 id="gorev-sistemi" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Görev Sistemi
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Sunucumuzda görev tamamlayarak iyi miktarda IC ve çeşitli ödüllerin yanında VIP&#39;lik kazanabilirsiniz.
        </p>
      </div>

      <div className="space-y-5">
        <h3 id="gorev-komutlari" className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Görev Komutları
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Görev ekranına <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">/q</code> komuduyla erişim sağlanır.</li>
          <li>Aldığınız görevi iptal etmek için <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">/q cancel</code> komudunu kullanabilirsiniz.</li>
        </ul>
      </div>

      <div className="space-y-5">
        {/* TODO: Burası editlenmeli çünkü sistem değişti. */}
        <h3 id="gorevleri-acma" className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Görevleri Açma
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Tüm görevler “Görev Ara” görevleri tamamlanarak açılır. Bu görevleri tamamlamak için sunucumuzda bulunmanız yeterlidir.</li>
          <li>Görevler kademe kademe açılır. Her kademede daha zor görevler yapar, daha iyi ödüller alırsınız.</li>
        </ul>
      </div>

      <div className="space-y-5">
        <h2 id="oyun-stili" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Oyun Stili: PVE & PVP
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Oyuna başlarken oyuncular PVP olarak mı PVE olarak mı oynayacaklarına karar vermelidir.</li>
          <li>Bu kararı verdikten sonra oyuncuların PVP&#39;den PVE&#39;ye veya PVE&#39;den PVP&#39;ye geçişleri büyük miktarda kaynağa ve IC&#39;ye mal olmaktadır. Bu nedenle kararınızı verirken iyi düşünmeniz önerilir.</li>
          <li>PVP oluşumlarına <strong>Klan</strong>, PVE oluşumlarına <strong>Takım</strong> denir.</li>
        </ul>
      </div>

      {/* TODO: ayrı sayfaya alınacak */}
      <div className="space-y-5">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          PVP
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>PVP klanlar birbirlerine savaş açabilir.</li>
          <li>Bu durumda savaş açılan klan, savaş açmak isteyen klandan daha güçsüzse ve savaşmak istemediğini belirtirse savaşı kabul etmek zorunda değildir.</li>
          <li>Eğer iki klanın da güçleri denkse, savaş açılan klan savaşı kabul etmek zorundadır.</li>
          <li>PVE takımlara savaş açamazsınız.</li>
          <li>Her klanın alanı claim sistemiyle korunmaktadır. İki klan arasında savaş ilan edilirse bu iki klanın claimleri savaş bitene kadar iptal edilir.</li>
          <li>Savaş başlamadan iki klan da birbirlerine saldıramaz.</li>
          <li>İki klan arasında savaşın başladığını yalnızca `@Yönetim` rolüne sahip olan yetkililer duyurabilir.</li>
          <li>PVP oyunculara zaman zaman bazı kaynak yardımları yapılır. PVE oyuncuların kaynaklarının yağmalanma gibi bir durumu olmadığından bu, kimse açısından haksızlık yaratmaz.</li>
        </ul>
      </div>


      <CardWiki />



    </div >
  )
}
