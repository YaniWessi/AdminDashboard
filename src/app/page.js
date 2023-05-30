import PageRowHeader from './components/PageRowHeader';
import PageRowContent from './components/PageRowContent';
import PageSecondRowContent from './components/PageSecondRowContent';
import PageThirdRowContent from './components/PageThirdRowContent';
import PageFourthRowContent from './components/PageFourthRowContent';

export default function Home() {
  return (
    <div>
     <PageRowHeader />
     <PageRowContent />
     <PageSecondRowContent/>
     <PageThirdRowContent/>
     <PageFourthRowContent/>
    </div>
  )
}
