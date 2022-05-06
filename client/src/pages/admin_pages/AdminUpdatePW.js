import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import AdminHeader from '../../components/admin_components/AdminHeader';
import OptionsNav from '../../components/admin_components/OptionsNav';

import API from '../../utils/API';

function AdminUpdatePW({ adminPath, currentUser }) {    
    const { item } = useParams();

    const [userToEdit, setUserToEdit] = useState({});
    const [newPassword, setNewPassword] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        loadUserToEdit();
    }, []);

    useEffect(() => {
        if (newPassword.length >= 6) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [newPassword])

    async function loadUserToEdit() {
        const { data } = await API.getItemByPath('User', item);

        setUserToEdit(data[0]);
    }

    function handlePWChange(e) {
        setNewPassword(e.target.value)
    }

    async function handleUpdatePW(e) {
        e.preventDefault();
        await API.updatePW({
            ...userToEdit,
            password: e.target.password.value
        });

        window.location.pathname = `${ adminPath }users/${ item }`;
    }

    return (
        <div>
            <AdminHeader adminPath={ adminPath } />
            <div id="edit-pw" className="flex flex-col md:flex-row">
                <OptionsNav hidden={ "" } adminPath={ adminPath } currentUser={ currentUser } />
                {
                    currentUser.PartnerId === userToEdit.PartnerId ? (
                        <main className="flex-1 m-8 text-2xl">
                            <form className=" text-xl my-2 mx-4" onSubmit={ handleUpdatePW }>
                                <article className="flex text-xl my-2 mx-4">
                                    <label htmlFor="password" className="flex-none p-1 mr-1">New Password:</label>
                                    <input type="password" value={ newPassword } id="password" name="password" onChange={ handlePWChange } className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                                </article>

                                <button className="p-2 text-lg float-right mr-8 mt-4 rounded-lg bg-blue-300 disabled:bg-slate-200" disabled={ buttonDisabled }>Change Password</button>
                            </form>
                        </main>
                    ) : (
                        <h1 className="flex-1 m-12 text-2xl">Not authorized to be on this page</h1>
                    )
                }
            </div>
        </div>
    );
}

export default AdminUpdatePW;