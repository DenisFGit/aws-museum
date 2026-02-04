
import { useState } from "react";

import { useAppDispatch } from "../store/hooks";
import { sendPost } from "../store/slices/exhibitSlices";

import './NewPost.scss';

const NewPost = () => {

    const dispatch = useAppDispatch();

    const [file, setFile] = useState<File | null>(null);
    const [desc, setDesc] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!file) {
            alert("Please select a file");
            return;
        }

        try {

            dispatch(sendPost({ file, description: desc }));

        } catch (error) {
            console.error("Upload failed", error);
        }
    };

    return (
        <div>
            <h1>New post page</h1>
            <form className="form" action="" onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="file"
                        name="image"
                        accept="image/png, image/jpeg"
                        onChange={(e) => setFile(e.target.files?.[0] || null)} />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={desc}
                        onChange={(e) => { setDesc(e.target.value) }} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NewPost