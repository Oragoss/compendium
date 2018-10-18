using System;
using System.Collections.Generic;
using System.Text;

namespace Compendium.BusinessLogic.Interfaces
{
    interface ICompendium
    {
        string GetData();
        void PostData();
        void UpdateData();
        void DeleteData();
    }
}
