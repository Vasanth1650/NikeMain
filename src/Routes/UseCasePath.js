import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageBugFix from '../BugFixer/PageBugFix';
import Data from '../Pages/Usecase/Separate/Data';

function UseCasePath() {
    return (
        <div>
            <BrowserRouter>
                <PageBugFix>
                    <Routes>
                        <Route path='/datasecurity' element={<Data/>}/>
                    </Routes>
                </PageBugFix>
            </BrowserRouter>
        </div>
  )
}

export default UseCasePath