// import Link from 'next/link'

type DaoCardProps = {
  name: string;
  address: string;
  ensName?: string;
  description?: string;
};

const DaoCard = ({ name, address, ensName, description }: DaoCardProps) => {
  return (
    // <Link href={`/dao/${address}`} passHref>
    <div className="card bg-base-200 shadow-md transition ease-in-out hover:-translate-y-1 cursor-pointer">
      <div className="card-body items-stretch">
        <div className="flex">
          {ensName ? (
            <img
              className="mask mask-circle h-12 w-12"
              src={`https://cdn.stamp.fyi/avatar/eth:${address}?s=144`}
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">
                {name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <h2 className="px-3 card-title text-center font-medium">
            {ensName ? ensName : name}
          </h2>
        </div>
        {description && (
          <p className="text-sm text-gray-500 my-2">{description}</p>
        )}
        <div className="text-sm text-gray-500">
          <p>Address: {address}</p>
          {ensName && <p>ENS Name: {ensName}</p>}
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default DaoCard;
