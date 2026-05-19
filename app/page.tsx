import Navbar            from '@/components/layout/Navbar'
import Footer            from '@/components/layout/Footer'
import Hero              from '@/components/sections/Hero'
import StatsBar          from '@/components/sections/StatsBar'
import PlatformOverview  from '@/components/sections/PlatformOverview'
import PaymentsInfra     from '@/components/sections/PaymentsInfra'
import DigitalAssets     from '@/components/sections/DigitalAssets'
import UseCasesGrid      from '@/components/sections/UseCasesGrid'
import Corridors         from '@/components/sections/Corridors'
import TreasuryLiquidity from '@/components/sections/TreasuryLiquidity'
import ApiDevelopers     from '@/components/sections/ApiDevelopers'
import ComplianceSecurity from '@/components/sections/ComplianceSecurity'
import CtaFooter         from '@/components/sections/CtaFooter'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <PlatformOverview />
      <PaymentsInfra />
      <DigitalAssets />
      <UseCasesGrid />
      <Corridors />
      <TreasuryLiquidity />
      <ApiDevelopers />
      <ComplianceSecurity />
      <CtaFooter />
      <Footer />
    </main>
  )
}
