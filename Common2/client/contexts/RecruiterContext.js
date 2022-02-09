import React, { useContext, useState, useEffect } from 'react'

const RecruiterContext = React.createContext()

export const useRecruiterData = () => {
  return useContext(RecruiterContext)
}

export const RectuiterDataProvider = ({ children }) => {
  const [currentApplicantData, setCurrentApplicantData] = useState()
  // const [loading, setLoading] = useState(true)



  const value = {
    currentApplicantData,
    setCurrentApplicantData
  }

  return (
    <RecruiterContext.Provider value={value}>
      {/* { !loading && children } */}
      {children}
    </RecruiterContext.Provider>
  )
}
