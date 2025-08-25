import {
    Source,
    Manga,
    Chapter,
    ChapterDetails,
    MangaUpdates,
    Tag,
    LanguageCode
} from "paperback-extensions-common"

export const LittleXGarden = new Source({
    name: "Little X Garden",
    description: "Catalogue manga de https://littlexgarden.com/",
    author: "TonNom",
    websiteBaseURL: "https://littlexgarden.com",
    languageCode: LanguageCode.FRENCH,
    version: 1,

    async getMangaList() {
        // Exemple statique, à remplacer par un vrai fetch vers ton API ou HTML
        return [
            new Manga({
                id: "naruto",
                titles: ["Naruto"],
                image: "https://littlexgarden.com/images/naruto.jpg",
                author: "Masashi Kishimoto",
                description: "Un ninja veut devenir Hokage.",
                tags: [Tag.create({ id: "shonen", label: "Shonen" })]
            }),
            new Manga({
                id: "onepiece",
                titles: ["One Piece"],
                image: "https://littlexgarden.com/images/onepiece.jpg",
                author: "Eiichiro Oda",
                description: "Des pirates cherchent le One Piece.",
                tags: [Tag.create({ id: "aventure", label: "Aventure" })]
            })
        ]
    },

    async getChapters(mangaId: string) {
        // Exemple statique : à remplacer par du vrai parsing/fetch selon ton site
        if (mangaId === "naruto") {
            return [
                new Chapter({
                    id: "naruto-chapitre-1",
                    mangaId: "naruto",
                    name: "Chapitre 1",
                    number: 1,
                    langCode: LanguageCode.FRENCH
                })
            ]
        }
        if (mangaId === "onepiece") {
            return [
                new Chapter({
                    id: "onepiece-chapitre-1",
                    mangaId: "onepiece",
                    name: "Chapitre 1",
                    number: 1,
                    langCode: LanguageCode.FRENCH
                })
            ]
        }
        return []
    },

    async getChapterDetails(mangaId: string, chapterId: string) {
        // Exemple statique, à remplacer par du vrai contenu HTML/image de chapitre
        return new ChapterDetails({
            mangaId,
            chapterId,
            title: "Chapitre 1",
            pages: [
                "https://littlexgarden.com/manga/naruto/1/1.jpg",
                "https://littlexgarden.com/manga/naruto/1/2.jpg"
            ]
        })
    },

    async getMangaUpdates() {
        // Si tu veux gérer les updates (nouveaux chapitres)
        return [
            new MangaUpdates({
                mangaId: "naruto",
                chapterIds: ["naruto-chapitre-1"]
            }),
            new MangaUpdates({
                mangaId: "onepiece",
                chapterIds: ["onepiece-chapitre-1"]
            })
        ]
    }
})