/**
 * Kullanıcı işlemlerini yöneten ana sınıf.
 */
export class UserManager {
    /**
     * Yeni bir kullanıcı kaydeder.
     * @param username - Kullanıcı adı.
     * @param email - E-posta adresi.
     * @returns Başarı durumu.
     */
    public registerUser(username: string, email: string): boolean {
        return true;
    }

    /**
     * İndirim hesaplar.
     * @param price - Fiyat.
     * @param points - Puan.
     * @returns İndirimli tutar.
     */
    public calculateDiscount(price: number, points: number): number {
        return price * (points > 100 ? 0.8 : 0.9);
    }
}
