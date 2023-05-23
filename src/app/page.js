import Header from '../app/components/Header'
import StatusCard from './components/StatusCard'

export default function Home() {
  return (
    <div>
     <Header/>
     <StatusCard headerContent={"task completed"} completedTasks={8} totalTasks={24} />
    </div>
  )
}
