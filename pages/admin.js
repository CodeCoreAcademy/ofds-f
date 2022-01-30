import React from 'react';
import db from '../components/db';
import { useSession } from "next-auth/react"
export default function admin() {
    const { data: session, status } = useSession()
    if(!(status=='authenticated' && session.user.email=="grabagrub.info2022@gmail.com"))       
        return (
            <div>
                You are not an authentic admin
            </div>
        );
    
        return(
            <div>
                arey chacha apne???
            </div>
        );
}
