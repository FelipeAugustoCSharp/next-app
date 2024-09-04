import React from 'react';
import Link from 'next/link';

export default function Home() {
    return (
        <>
        <h1>Home</h1>
        <div>
            <Link href="/doctor/create">Create new doctor</Link> <b>and </b>
            <Link href="/doctor/list">List all doctors</Link>
            <br />
            <Link href="/pacient/create">Create new pacient</Link>
            <br />
            <Link href="/appointment/create">Create new appointment</Link>
            <br />
            <Link href="/prescription/create">Create new prescription</Link>
            <br />
            <Link href="/prescription/upload">Create new upload</Link>
            <br />
            <Link href="/fake-api">Acess fake api</Link>

        </div>
        </>
    );
}