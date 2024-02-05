import Events from '@/components/Events'
import Members from '@/components/Members'
import MorphingText from '@/components/Hero'
import Aboutus from '@/components/Aboutus'
import Navbar from '@/components/Navbar'
import Background from '@/components/Background'
import WhatweDo from '@/components/Whatwedo'
import Departments from '@/components/Department'

export default function Home() {
  return (
    <>
    <Background />
    <Navbar />
    <MorphingText />
    <Aboutus />
    <WhatweDo />
    <Departments />
    <Members />
    <Events/>
    </>
  )
}
