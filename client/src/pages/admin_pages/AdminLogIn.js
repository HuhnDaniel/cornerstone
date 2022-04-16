import React, { useEffect } from 'react';

import AdminHeader from '../../components/admin_components/AdminHeader';
import API from '../../utils/API';

function AdminLogIn() {
    async function loginHandler(e) {
        e.preventDefault();

        await API.logIn({
            email: e.target.email.value,
            password: e.target.password.value
        })
        .then(() => {
            console.log("success");
        })
        .catch(() => {
            console.log("failure");
        });
    }

    return (
        <div>
            <AdminHeader />
            <main className="m-8 text-2xl">
                <h1>Please provide Admin Credentials</h1>
                <form className="flex flex-col items-center" onSubmit={loginHandler}>
                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="email" className="flex-none p-1 mr-1">Email:</label>
                        <input type="email" id="email" name="email" className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                    </article>

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="password" className="flex-none p-1 mr-1">Password:</label>
                        <input type="password" id="password" name="password" className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                    </article>

                    <button className="p-2 text-lg float-right mr-8 mt-4 rounded-lg bg-blue-300" type="submit">Log In</button>
                </form>
            </main>
        </div>
    );
}

export default AdminLogIn;