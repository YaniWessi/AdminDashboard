import StatusCard from './components/StatusCard'

export default function Home() {
  return (
    <div>
     <StatusCard headerContent={"task completed"} completedTasks={8} totalTasks={24} />
    </div>
  )
}
