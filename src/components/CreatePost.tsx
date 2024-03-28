import Link from 'next/link';
import Image from 'next/image';

interface Props {
  user:
    | ({
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      } & { id: string })
    | undefined;
}

export default function CreatePost({ user }: Props) {
  function openModal() {
    alert('Open modal');
  }

  return (
    <>
      <div className="flex items-center py-4">
        {user?.image && (
          <Link href="/">
            <Image
              src={user?.image}
              width={36}
              height={36}
              alt="Profile image"
              className="rounded-full"
            />
          </Link>
        )}

        <div className="flex w-full mx-2 pl-1" onClick={openModal}>
          <span className="text-[#999999] dark:text-[#777777] font-normal">
            Start a tweety...
          </span>
        </div>

        <button
          className="bg-black dark:bg-white text-white dark:text-black h-9 rounded-full font-medium cursor-not-allowed opacity-30"
          disabled
        >
          <div className="px-4">Post</div>
        </button>
      </div>

      <hr className="h-px border-0 bg-black/10 dark:bg-white/10" />
    </>
  );
}
