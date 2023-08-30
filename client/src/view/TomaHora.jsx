import React from "react";
import { InlineWidget } from "react-calendly";


import PageTemplate from '../template/PageTemplate'

const TomaHora = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------



// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------



// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div>
            <PageTemplate>
                <div>
                    <InlineWidget url="https://calendly.com/vicenteflaquito/hora-de-atencion" />
                </div>
            </PageTemplate>
        </div>
    )
}

export default TomaHora