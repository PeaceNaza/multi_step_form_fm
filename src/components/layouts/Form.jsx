import { Box } from "@mantine/core"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Personal from "../pages/Personal"
import SelectPlan from "../pages/SelectPlan"
import PickAdd from "../pages/PickAdd"
import Summary from "../pages/Summary"
import Finished from "../pages/Finished"
import Button from "./Buttons"

const Form = () => {

  const navigate = useNavigate()

  const [page, setPage] = useState(0)
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    addons: []
  
  })
  
  const formTitle = ["Personal info", "Select your plan", "Pick add-ons", "finishing up"]

  const pageDisplay = () => {
    if (page === 0) {
      return <Personal />
    } else if (page === 1) {
      return <SelectPlan />
    } else if (page === 2) {
      return <PickAdd />
    } else if (page === 3) {
      return <Summary />
    } else if (page === 4){
      return <Finished />
    } else {
      return <Personal />
    }
  } 

  const handleNext = () => {
    if (page < 4) {
      setPage(page + 1)
    } 
  } 

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  return (
    <Box>
      {pageDisplay()}
      <Button variant="primary" onClick={handlePrevious}>
        Previous Step
      </Button>
      <Button variant="primary" onClick={handleNext}>
        Next Step
      </Button>
    </Box>

  )
}

export default Form