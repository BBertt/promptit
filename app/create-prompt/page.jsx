'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import Form from '@components/Form';

const CreatePrompt = () => {

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    })

    const CreatePrompt = async (e) => {
        e.preventDefault(); // prevent the browser from reloading.
        setSubmitting(true);

        try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })

            if (response.ok) {
                Router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally { // this will happen either way.
            setSubmitting(false);
        }
    }

  return (
    <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={CreatePrompt}
    />
  )
}

export default CreatePrompt;