"use server"
 
import { cookies } from 'next/headers'

export async function serverLogin(email) {
    cookies().set("user_email", email, {
        // Configurações do cookie, se necessário
    });
}

export async function serverLogout() {
    cookies().delete("user_email");
}


