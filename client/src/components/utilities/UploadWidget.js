// require('dotenv').config();

import { useEffect, useRef } from "react";

function UploadWidget( { targetFolder, functionality, updateItemImage } ) {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: process.env.REACT_APP_CLOUDNAME,
            uploadPreset: process.env.REACT_APP_UPLOAD_PRESET,
            showUploadMoreButton: false,
            multiple: false,
            folder: targetFolder
        }, (err, res) => {
            if (res.event === 'success') {
                console.log(res.info.public_id.split('/')[res.info.public_id.split('/').length - 1]);
                updateItemImage(res.info.public_id.split('/')[res.info.public_id.split('/').length - 1]);
            }
        });
    }, [targetFolder])

    function openWidget(e) {
        e.preventDefault();

        widgetRef.current.open()
    }

    return (
        <button className="p-2 text-lg mr-8 mt-2 rounded-lg bg-blue-300 disabled:bg-slate-200" onClick={ openWidget }>
            {
                functionality === 'edit' ? 'Change Image' : 'Add Image'
            }
        </button>
    )
}

export default UploadWidget;